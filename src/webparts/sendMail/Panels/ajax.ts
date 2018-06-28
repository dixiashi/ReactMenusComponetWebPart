import * as $ from 'jquery';

interface JQueryAjaxSettings{
url:string|null,
error:any,
success:any,
complete:any,
}

export function Execute(url: string, options: JQueryAjaxSettings): Promise<any>;
export function Execute(options: JQueryAjaxSettings): Promise<any>;
export function Execute(a, b?) {
    var options: JQueryAjaxSettings;
    if (b) {
        options = b;
        options.url = a;
    } else {
        options = a;
    }
    return new Promise((resolve, reject) => {
        let error = options.error;
        options.error = (jq, textStatus, errorThrown) => {
            if (error) {
                try {
                    error(jq, textStatus, errorThrown);
                } catch (err) {
                    reject(err);
                }
            }
            if (jq.responseJSON && jq.responseJSON.error) {
                reject(jq.responseJSON.error.message);

            }
            else {
                reject(errorThrown);
            }
        };
        let success = options.success;
        let responseData;
        options.success = (data, textStatus, response) => {
            if (success) {
                try {
                    responseData = success(data, textStatus, response);
                } catch (err) {
                    reject(err);
                }
            }
            else {
                responseData = data;
            }
        }
        let complete = options.complete;
        options.complete = (resp, textStatus) => {
            if (complete) {
                try {
                    responseData = complete(resp, textStatus);
                } catch (err) {
                    return reject(err);
                }
            }
            resolve(responseData);
        }
        $.ajax(options);
    });
}
