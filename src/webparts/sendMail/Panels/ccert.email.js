
import * as ccert from '../Panels/ccert.common.js';
import * as $ from 'jquery';
'use restrict';
export var email = {
  options: {
    // Email Either email groupname or email address
    "url": null,
    "mailFrom": null,
    "mailTo": null,
    "mailCc": null,
    "mailSubject": null,
    "mailBody": null,
    "digest": null,
    success: null,
    error: null,
  },
  sendEmail: function (options) {
    var _that = this;
    options = $.extend({}, this.options, options);

    //Check data
    if (!ccert.common.checkEmail(options.mailFrom)) {
      return;
    }

    var array = document.URL.split('/');
    //Get the relative url of the site
    //var serviceUrl = ((_spPageContextInfo.webServerRelativeUrl === '/') ? '/' : _spPageContextInfo.webServerRelativeUrl);
    var serviceUrl = "/" + array[3] + "/" + array[4];
    options.url = serviceUrl + "/_api/SP.Utilities.Utility.SendEmail";
    console.log("api url:" + options.url);

    if (!$("#__REQUESTDIGEST").val()) {
      var rOptions = {
        baseurl: serviceUrl,
        success: function (data) {
          console.log(data);
          options.digest = data.d.GetContextWebInformation.FormDigestValue;
          _that._callSendEmailAPI(options);
        },
      };
      ccert.common.getRequestDigest(rOptions);
    } else {
      options.digest = $("#__REQUESTDIGEST").val();
      this._callSendEmailAPI(options);
    }
  },

  _callSendEmailAPI: function (options) {
    $.ajax({
      contentType: 'application/json',
      url: options.url,
      type: "POST",
      data: JSON.stringify({
        'properties': {
          '__metadata': {
            'type': 'SP.Utilities.EmailProperties'
          },
          'From': options.mailFrom,
          'To': {
            'results': [options.mailTo]
          },
          'CC': {
            'results': [options.mailCc]
          },
          'Body': options.mailBody,
          'Subject': options.mailSubject,
          "AdditionalHeaders":
          {
            "__metadata":
            { "type": "Collection(SP.KeyValue)" },
            "results":
            [
              {
                "__metadata": {
                  "type": 'SP.KeyValue'
                },
                "Key": "content-type",
                "Value": 'text/html',
                "ValueType": "Edm.String"
              }
            ]
          }
        }
      }),
      headers: {
        "Accept": "application/json;odata=verbose",
        "content-type": "application/json;odata=verbose",
        "X-RequestDigest": options.digest
      },
      success: function (data) {
        if (options.success) {
          options.success(data);
        }
        console.log(options);
        console.log('Sending Email succeed!');
      },
      error: function (err) {
        if (options.error) {
          console.log('Error in sending Email: ' + JSON.stringify(err));
        }
        console.log(options);
      }
    });
  },

};
