// The Nodemailer Module
// require() function is used to include modules
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'ouremail@gmail.com',
        pass:'our password'
    }
});

var mailOptions = {
    from : 'ouremail@gmail.com',
    to: 'abc@gmail.com',
    subject: 'nodejs email',
    text: 'hi'
};

transporter.sendMail(mailOptions,function(error,info) {
    if(error) {
        console.log(error);
    } else {
        console.log('email sent:'+ info.response);
    }
});

// to send an email containing html:
var mailOptions = {
    from: 'ouremail@gmail.com',
    to: 'abc@gmail.com',
    subject:'nodejs email',
    html: '<h1> hello </h1> <p> hi </p>'
}
