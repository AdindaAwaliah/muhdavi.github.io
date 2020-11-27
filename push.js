var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BKhjWAgFt-RKcoKUvffrUzOXoVDueeL8aBlgrwpmc6oqHOzAXGJY2z1CREzQeBGlkRa1qeMjMNBIolFXdpDTqIw",
    "privateKey": "MQoZ7QCwShhUpCCmZI3j7KwqrrHcjDagT07PJp8YJX4"
};


webPush.setVapidDetails(
    'mailto:davi_muhammad@yahoo.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/d93rOW1hMb0:APA91bF4byBXxta3CtHFU-QtEm65XrTs4b3YnlPUNj7iF3j8VJSgGAAeGbOAZNVNcoaFmdOVsOc-QPru29kJHGYDh8AT8Gm64-bCPLX5Ei6CaahS1LN9Q4mTmuOkj9wtosisRY-CXBnZ",
    "keys": {
        "p256dh": "BCHfmRTdf86LCsgKUQTkzG9oLbSB3XL2AjGahAb2VJFBr28t605kcKtXjN72sMWRNbaT4ohtlAsbeW0HaQ/VaPs=",
        "auth": "bqwxLTitY+7+x1yrapr1rA=="
    }
};
var payload = 'Selamat Datang di Aplikasi Informasi Liga Inggris';

var options = {
    gcmAPIKey: '191057097503',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);