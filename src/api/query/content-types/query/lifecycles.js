module.exports = {
  async afterCreate(event) {
    const { result } = event;
    // console.log(event);

    // try {
    //   const res = await strapi.plugins["email"].services.email.send({
    //     to: "vigneshpamu2002@gmail.com",
    //     from: "mailtofantasi@gmail.com",
    //     subject: "Contact Us",
    //     text: "Contact Us",
    //     html: "<h4>Received a Contact</h4>",
    //   });
    // } catch (error) {
    //   // Handle errors here
    //   console.error("Error sending email:", error);
    // }
  },
};
