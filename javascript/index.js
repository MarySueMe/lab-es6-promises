// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;

                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>'Mashed potatoes are ready!'</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 1);
  })

  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })

  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })

  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })

  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })

  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })

  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })

  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>"Steak is ready!"</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })

  // .then((step8) => {
  //   document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
  //   return obtainInstruction("steak", 9);
  // })

  .catch(console.log("Instruction step does not exist!"));

// Iteration 3 using async/await
// javascript
async function makeBroccoli() {
  // ... Your code here
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    const step1 = await obtainInstruction("broccoli", 1);
    const step2 = await obtainInstruction("broccoli", 2);
    const step3 = await obtainInstruction("broccoli", 3);
    const step4 = await obtainInstruction("broccoli", 4);
    const step5 = await obtainInstruction("broccoli", 5);
    const step6 = await obtainInstruction("broccoli", 6);
    //const step7 = await obtainInstruction("broccoli", 7);
    // const step8 = await obtainInstruction("broccoli", 8);

    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>"Broccoli is ready!"</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log("Instruction step does not exist!");
  }
}

makeBroccoli();

// Bonus 2 - Promise all
Promise.all([steak, mashedPotatoes, brusselsSprouts, broccoli])
  .then((step) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[2][0]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[2][1]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[2][2]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[2][3]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[2][4]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[2][5]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[2][6]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[2][7]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>'Brussels sprouts are ready!'</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.log("Instruction step does not exist!");
  });

//
