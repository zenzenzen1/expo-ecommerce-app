const admin = require('firebase-admin');
// const serviceAccount = require('./path-to-your-firebase-service-account.json'); // Download this from Firebase Console

admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "react-native-chat-app-22c36",
        "private_key_id": "810db404a1f8fb8ee48cbe8f4b953ac20a621b9b",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGZW/fmDQcWNYy\nX4ALRoBz6xRpXqt4IQPdcMim+D0gMg2VeTgYw5vMfgyC/wqw8IEekMLtu8kE8f7t\nLcUu7tuRv+xNeZo9byrTAQ1VveLC/ttgOTUXowwlEHzBTYHwPT9kocSLaK4L/lAC\nrW/1me6hsLhEl9Ez9JceqoyH4wM37dx7dThrXpym9U3fxu0T68hcBn9PiwoLdfjV\nmmgmSW84+tc2glI5KtEVvFJjOgdArlBXZ2oNEa/XgKySRq3CKKdiAmGvdEWhURw2\ngSVrYOzMjWuIw76VJfGGzVo8YVTCqHMMRPemsg9fdlwhlShk7NH9jdhYFba71uCd\nYbfWmBS9AgMBAAECggEAG14l0xnLYneswJEk+Ck3EgaFL83j6HPhdRwYSdQnlnfh\nINPydZQSO2DN+AoXnvXmUeGVSjcj0T9Ss8QjFcjUWCQ6BCv4p23c4fOcs824aL7A\nY2Mw3DxdMgW2t/GpsYq5YnfgRXzguX3Q6rWjIqWj4gEfQjMRJFIiwJO1RA+AQ6gZ\ng8xj2saIZA9lAshcXtlmhMViZvoMwd0aXB428svSHnN4BI/OnVFEF9hsY293ATzV\nPCxgJujdAFA8VK1Cvq2uk6L5CKew/xEnOlvZG+HLYOp7emXzr1tcPStUd10HHecE\nzsVsSktaI+gzwzFWzCfCXdwxgta9ObByEt2IQmk0QQKBgQDt9EPySEr5PSPjDz/W\n/dixfZnuQS7Jp7N5x1BYx52TtqoW7wKlj1DAMHC9bJocj8bOygCHJ0FXLOQQwr/s\nDkuyuoQNU7e4qfkx6mux1E7Xw5Dk9balmMgVjWUlum2lBNVTuCpoZ6NjW9vzPdZP\n63cv0a75sD7t6/EipxyXQrc24QKBgQDVcS2+ggqAWrBMaUX3ilYpdECOnFCe6hJC\nTz8V1wZyLRtnGA77XfrRMYKRIWM07rmXPjXRYCSXjbUgiPUx+zW8iPsBKMmvejEu\n7/PE89qk7AzlWtgHdoZkcoC5S3haLwEEsCuFC8kKz+aXhD5UP5BSV6IBhvETMFOB\naVGurI7FXQKBgQDG0i0fuKXkYOCmbOxzj8DKdN70Q0R7vALrQs1wkMGqVZsC9Ivq\nl7fqDc91htOx/7QmvoP4aaVf2KNrGb5Q15UKbmu90vCUfHk56tw3RuTlxYNAu8nz\nzZeI4o7cGkxY8JPqktvkRowvjeZW9JkoR99bdkFUYZ4DH/xobuclv9nkIQKBgQDM\npGX6eQ3+gHT13h1iODViK37V/NNjegMlpntSwkYA5HSYhL2gjjuzpKeN5JgMoTI5\n60CITYjn8csOtaF5WWTtLdyTAPtWjm5nlVKArFketN+sa0wi46X42rvGbLCortZo\nG0yulF0eS7TH4tgryIHkIPdIRYwQHM6Djmntcq60VQKBgFcjnkH52uZ0bFcTMmPs\nDN/O5nGEwX7fPBHb/Rl8ypQvvxwffFBWT4gTFBcEUNaozVCjV4LZf6jwikyT9Iv3\nBX8Up/GGv9ESDKkORMCfq3NksCXVwqkFrXuSRUO6WQbtaF4prh8GMo1gd1omgs8x\n86kukMm+/fxsFykQjTcL3rq5\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-fbsvc@react-native-chat-app-22c36.iam.gserviceaccount.com",
        "client_id": "106689934319591498448",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40react-native-chat-app-22c36.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"

    })
});

module.exports = admin;