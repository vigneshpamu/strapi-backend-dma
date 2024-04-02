module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        // host: env("SMTP_HOST", "smtp.gmail.com"),
        // port: env("SMTP_PORT", 587),
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "mailtofantasi@gmail.com",
          pass: "kjnlxmzkqspgzati",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "mailtofantasi@gmail.com",
        defaultReplyTo: "vigneshpamu2002@gmail.com",
      },
    },
  },
  // ...
});

// module.exports = ({ env }) => ({
//   email: {
//     provider: "nodemailer",
//     providerOptions: {
//       host: "smtp.gmail.com",
//       port: 587,
//       auth: {
//         user: "mailtofantasi@gmail.com",
//         pass: "kjnlxmzkqspgzati",
//       },
//       // ... any custom nodemailer options
//     },
//     settings: {
//       defaultFrom: "hello@example.com",
//       defaultReplyTo: "hello@example.com",
//     },
//   },
// });
