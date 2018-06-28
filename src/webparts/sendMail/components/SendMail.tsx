import * as React from 'react';
import styles from './SendMail.module.scss';
import { ISendMailProps } from './ISendMailProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as $ from 'jquery';
//import * as ajax from '../Panels/ajax'

import CcertLayout from './Ccert_Layout';


import './SendEmailClasses.css';
import * as ccert from '../Panels/ccert.email.js';

export default class SendMail extends React.Component<ISendMailProps, {}> {

  constructor(props) {
    super(props);
    this.handleSendEmailClick = this.handleSendEmailClick.bind(this);
    this.state = {
template:"",
};
  }

getEmailBodyTemplate(){

let URL = "https://microsoftapc.sharepoint.com/teams/dev_ccert/_api/lists/getbytitle('EmailTemplate')"
//ajax.Execute(URL, {}).then((data)=>{
//alert(data)
//});

}

  handleSendEmailClick(e) {

    let from = $("#mailFrom").val(),
      to = $("#mailTo").val(),
      cc = $("#mailCc").val(),
      subject = $("#mailSubject").val();

//Get the email template from SP api
//Currently, mock the response as following:
let apiResult = '<br><br><br>Hello, This is a notification that the registration of ${data.ProductName} ${data.VersionNumber} has been renewed: <br>&#160;<br><br> '
+'<strong>Product Group:</strong> ${data.ProductGroup} <br>&#160;<br>                                                                                              '
+'<strong>Product Name:</strong> ${data.ProductName}<br>&#160;<br>                                                                                                 '
+'<strong>Version Number:</strong> ${data.VersionNumber}<br>&#160;<br>                                                                                             '
+'<strong>Reg/Permit Number:</strong>&#160;${data.RegistrationNumber} <br>&#160;<br>                                                                               '
+'<strong>New Expiration Date:</strong> ${data.ExpirationDate}$Expiration Date <br>&#160;<br>                                                                     '
+'For deatils,  please&#160;visit ${data.Link}.<br>&#160;<br>China Certification Management Team                                                                   ';
let data ={
      ProductGroup: "ASG (Office)",
      ProductName: "ASG (Office)20162",
      VersionNumber: "1.0",
      CertificateType: "GB18030",
      RequestType: "RequestType",
      RegistrationNumber:"20180628000001",
      Applicant: "Qiang Hao",
      Status: "Planned",
      Description: "The data is a demo data.",
      Author: "Qiang Hao",
      ExpirationDate: (new Date()).toDateString(),
      Link:"https://microsoftapc.sharepoint.com/teams/dev_ccert/Lists/EmailTemplate/AllItems.aspx",
      Created: (new Date()).toDateString(),
      Modified: (new Date()).toDateString(),
};

let str = `(data) => \`${apiResult}\``;
let func = eval.call(null, str);
let htmlString = func(data);

console.log(htmlString);
    let options = {
      "mailFrom": $("#mailFrom").val(),
      "mailTo": $("#mailTo").val(),
      "mailCc": $("#mailCc").val(),
      "mailSubject": $("#mailSubject").val(),
      "mailBody":htmlString,
      success: function (e) { alert('Send Email succeed!'); },
      error: function (e) { alert('Send Email faile.' + JSON.stringify(e)); },
    };

    ccert.email.sendEmail(options);
  }

  public render(): React.ReactElement<ISendMailProps> {





    let content = {
      ProductGroup: "ASG (Office)",
      ProductName: "ASG (Office)20162",
      VersionNumber: "1.0",
      CertificateType: "GB18030",
      RequestType: "RequestType",
      Applicant: "Qiang Hao",
      Status: "Planned",
      Description: "The data is a demo data.",
      Author: "Qiang Hao",
      Created: (new Date()).toDateString(),
      Modified: (new Date()).toDateString(),
    }

    return (
      <div id="mailInfo">
        <fieldset>
          <legend>Send Email</legend>
          <label>From: </label><br />
          <input id="mailFrom" value="v-qiha@microsoft.com" />
          <br />
          <br />
          <label>To: </label>
          <br />
          <input id="mailTo" value="v-qiha@microsoft.com" /><br />
          <br />
          <label>Cc: </label><br />
          <input id="mailCc" value="v-qiha@microsoft.com" />
          <br />
          <br />
          <label>Subject: </label><br />
          <input id="mailSubject" value="Your Test0606 1.0 certification request has been returned for additional information" />
          <br />
          <br />
          <label>Body: </label><br />
          <div id="emailTemplate1">
            <pre>
              Hello,                                                  <br /><br />
              <p>This is a notification that your Test0606 1.0 certification request has been returned for additional information:</p><br />
              <strong>Product Group</strong>: {content.ProductGroup}         <br />         <br />
              <strong>Product Name</strong>: {content.ProductName}          <br />         <br />
              <strong>Version Number</strong>: {content.VersionNumber}       <br />         <br />
              <strong>Certificate Type</strong>: {content.CertificateType}   <br />         <br />
              <strong>Request Type</strong>: {content.RequestType}           <br />         <br />
              <strong>Applicant</strong>: {content.Applicant}                <br />         <br />
              <strong>Status</strong>: {content.Status}                       <br />         <br />
              <strong>Description</strong>: {content.Description}             <br />         <br />
              <strong>Comment</strong>: {content.Author}                    <br />         <br />
              <strong>Created Time</strong>: {content.Created}                <br />         <br />
              <strong>Last Modified Time</strong>: {content.Modified}         <br />         <br />
              Applicant, please visit: http://ccert2/SitePages/MyStatus.aspx  <br />
              Please work with the China Certification Management Team for the  resubmission.<br />
              China Certificate Management Team<br />
            </pre>
          </div>
          <span> &nbsp; </span>
          <br />

          <button id="send" type="button" onClick={(e) => { this.handleSendEmailClick(e); }}>Send Email</button>
        </fieldset>
      </div>
    );
  }
}

interface IEmailTemplate{
TemplateName:string|any,
EmailSubject:string|any,
TemplateContent:string|any,
TemplateParameters:string|any,
TemplateDescription:string|any,
}
