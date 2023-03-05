############# API PAGES ##############

######### Simple Post Request #############

import fs from "fs";
import path from "path";

function handler(req, res) {
  // Sending the response as a JSON format !

  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.text;

    const newFeedback = {
      id: Date.now().toString(),
      email,
      text: feedback,
    };

    //   Store that in a database or file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const filedata = fs.readFileSync(filePath);
    const data = JSON.parse(filedata);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success !", feedback: newFeedback });
  } else {
    res.status(200).json({
      message: "The Response was Successfull !",
    });
  }
}
