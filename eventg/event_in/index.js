module.exports = async function (context, eventGridEvent) {

  /*
      eventGridEvent: {
        topic: '/subscriptions/1111111-1111-1111-1111-1111111111111/resourceGroups/resourcegroupname/providers/Microsoft.Storage/storageAccounts/storageaccountname',
        subject: '/blobServices/default/containers/containername/blobs/file',
        eventType: 'Microsoft.Storage.BlobCreated',
        id: '834cb060-201e-002f-0e6c-3a2a7106fdad',
        data: [Object],
        dataVersion: '',
        metadataVersion: '1',
        eventTime: '2020-06-04T12:32:56.9411644Z'
      }
  */

  context.log("*************** Request form EventGrid --> JavaScript function");
  context.log("Topic: " + eventGridEvent.topic);
  context.log("Subject: " + eventGridEvent.subject);
  context.log("Time: " + eventGridEvent.eventTime);
  context.log("URL: " + eventGridEvent.data.url);


  context.done();

}
