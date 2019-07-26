# TITLE
(Explain here the goal of the tutorial.)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus velit lorem, sagittis dignissim ex fermentum eu. In turpis ipsum, pulvinar at lobortis ut, facilisis a nibh. Duis volutpat risus purus, volutpat maximus velit elementum vel. Vivamus bibendum fringilla congue. Curabitur eu tortor quis massa pretium pellentesque. Donec at ex varius, volutpat dui ac, vulputate mi. Integer nec ex eu ante tincidunt venenatis ac nec nunc. Suspendisse efficitur, nibh in vehicula gravida, est odio molestie quam, nec posuere leo tortor nec dolor. In eget nunc quis risus maximus molestie. Quisque purus mi, vulputate id odio ut, consectetur pharetra sem. Etiam pretium tristique maximus. In et faucibus neque. In suscipit velit vitae pulvinar molestie. Mauris elementum egestas velit, sit amet tempor velit tincidunt et. Nulla sed risus leo.

## Screenshots
(Show what the result of tutorial will look like)
<p>
<img src="screenshot1.jpg" alt="DESCRIBE FIRST SCREENSHOT" width="300"/>
<img src="screenshot2.jpg" alt="DESCRIBE SECOND SCREENSHOT" width="300"/>
</p>

## Requirements
1. CEC subscription with Content Administrator role (verify)
2. Windows or Mac computer with Node v. X.Y.Z or higher (verify)


## Content Model
(Explain the content model for this tutorial)

## Code
Get the [starter code](https://github.com/oracle/content-and-experience-tutorials/foo/archive/start.zip) for this tutorial and follow the steps below to complete it, or skip to the [completed code](https://github.com/oracle/content-and-experience-tutorials/foo/archive/completed.zip).
### Creating the content
We will use the command-line tool *cec* to upload the content for this tutorial.  Follow [these steps](cec-cli.md) to download and configure the tool first.

Now run the following commands using the URL for your Oracle Content and Experience instance, username and password.

Configure cec command-line for your instance
> $ cec register-server myCompany -e https://myCompany.cec.ocp.oraclecloud.com -u myCECUser -p myCECPassword

Create a repository and channel:
> $ cec create-repository -s myCompany FooTutorialRepository

> $ cec create-channel -s myCompany FooTutorialChannel

Upload the content:
> $ cd footutorial

> $ cec upload-content ./tutorialcontent.zip -s myCompany -c FooTutorialChannel -r FooTutorialRepo

Publish the content:
> $ cec control-content publish -c FooTutorialChannel -s myCompany 

## WHAT SHOULD THIS SECTION BE CALLED?  IT IS THE ACTUAL TUTORIAL
### Content SDK
This tutorial uses Content JS SDK (Browser) to access your Oracle Content and Experience.  Follow [these steps](contentsdk.md) to download the Content JS SDK (Browser).

Import the Content SDK to the project:
* What do we do here?  I think you can do an npm install contentsdk but unsure whether the SDK that was downloaded needs to be in a specific location etc.?

Configure the projet to use your CEC instance and channel:
> edit hostname & channel token in some source file for the developer's server

Complete the function XYZ to find content of type TUV:
> show some code here using a delivery client to fetch some content items and map them into some model objects that are already defined in the code

etc.
> more
