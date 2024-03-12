import { connectToDB } from "@mongodb/database";
import User from "@models/User";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { writeFile} from "fs/promises"

// User register//

export async function POST(req) {
  try {
    // connect to mongoDB
    await connectToDB();

    const data = await req.formData(); // we will take formData from the front end then we call that request.formData = data

    // take the infor ffrom the form//
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const file = data.get("profileImage");

    if (!file) {
      return NextResponse.json(
        { message: "no file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const profileImagePath = `C:/Users/flip9/Personal_Projects/Artify_tutorial/My_Artify_tutorial/public/uploads/${file.name}`;
    await writeFile(profileImagePath, buffer);

    console.log(`open ${profileImagePath} to see the uploaded Images!`);

    // check if user exists

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "user already exists" },
        { status: 409 }
      );
    }

    // hash the password
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);

    // if no existing username, create the user

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profileImagePath: `uploads/${file.name}`
    });

    //save new user

    await newUser.save()

    // send success msg
return NextResponse.json({message: "User Registered Succesfully", user: newUser}, {status: 200} )

  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: " failed to create new user"}, {status: 500})
  }
}
