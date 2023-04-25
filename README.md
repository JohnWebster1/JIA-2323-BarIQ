## Team 2323 Bar IQ

Team 2323 is tasked with creating an Interactive Resource Portal for new and existing customers using Bar IQ technologies. Specifically, we are looking to make an interactive layout builder that implements RFID technology into beer warehouses, an ROI calculator for beer warehouse mangers, and a multipurpose Search Engine page for users of the IRP.

We are working with Daniel Knotts, CTO of Bar IQ, LLC. 

## Installation Instructions
1. Clone the repository to your local machine using `git clone https://github.com/JohnWebster1/JIA-2323-BarIQ.git`
2. Install Node.js and npm if you do not already have them installed.
3. `cd` into the correct folder using `cd JIA-2323-BarIQ/bariq-frontend`
4. Run `npm install` to install all dependencies.
5. Run `npm run dev` to start the development server on your local machine when changes need to be made to the code.
6. Commit and push your changes to the GitHub repository.

## Deployment Instructions
1. **Option 1**: Use a custom Linux server to host the website
    1. Install Node.js and npm on the Linux server if you do not already have them installed.
    2. `cd` into the correct folder using `cd JIA-2323-BarIQ/bariq-frontend`
    3. Run `npm install` to install all dependencies.
    4. Run `npm run build` to build the project.
    5. Run `npm run start` to start the production server on the Linux server.
   6. Customize your domain name to point to the Linux server's IP address
   7. Updates to the code will require you to rebuild the project and restart the production server.
2. **Option 2**: Use a free platform such as Vercel to host the website
    1. Create a Vercel account and link it to your GitHub account.
   2. Create a Vercel new project and link it to the GitHub repository you cloned earlier.
   3. Customize your domain name to point to the Vercel server's IP address (follow Vercel's instructions)
   4. Updates to the code will automatically be deployed to the Vercel server.

## Release Notes

### Version 0.5.0: Next Release
#### New Features
* Relevant Bar IQ videos and links are now published to the Video Modules page. 
* UI theme of the IRP was revised one last time to match the theme of the old and incomplete Bar IQ website.
* IRP is now deployed and hosted on Vercel App through GitHub repository.

#### Bug Fixes
* Fixed icons and Bar IQ images failing to appear when Interactive Resource portal application was deployed to the hosting platform Vercel.

---

### Version 0.4.0
#### New Features
* The Video Modules Page is now functional with drop down modules and placeholder YouTube videos.
* All icons now have a main page that can be iterated upon for the future.

#### Bug Fixes
N/A

#### Issues
* Migrate Dashboard page JavaScript file from HTML based to React Component based.

---

### Version 0.3.0
#### New Features
* The Bar IQ ROI Calculator is now functional with an info and calculator page.
* The ROI calculator page has 20+ input fields which Bar IQs ROI algorithm will run on once implemented.
* The Search Engine page now has a UI panel with clickable checkboxes for the different filter categories.

#### Bug Fixes
* Fixed icons on the side navigation bar.
* Fixed issue with ROI fields jumbling together when resizing window.
* Fixed issue with main navigation bar and main window spilling over the right side of the screen.
* Fixed ROI calculator results popup rendering incorrectly.
* Fixed "learn more" buttons to navigate to the correct pages.

---

### Version 0.2.0
#### New Features
* The Bar IQ Interactive Resource Portal (IRP) now has a functional Sidebar Navigation Menu.
* The main navigation bar has been relocated to mesh better with the side navigation menu.
* A foundation for the main portal page (Home/Dashboard) can now be viewed.
* The Search Engine page now displays a search bar and dummy articles that can be updated by Bar IQ admin. The search bar comes with keyword filtering.
* A complete footer section is available and ready to be filled out with the appropriate content once gathered.

#### Bug Fixes
* Fixed issue with main content spilling into the footer section of the Dashboard page.
* Fixed screen resizing issues and content jumbling together. Resizing is now working and mobile compatible.
* Fixed login button that was showing when already logged in. A logout button is now shown in its place.
* Fixed navigation issue where clicking the logo from the login page bypassed authentication and took you to the IRP.
* Fixed issue with the side navigation menu arrow glitching over the Bar IQ logo when collapsed.

---

### Version 0.1.0

#### New Features
* The Bar IQ Interactive Resource Portal now has a login screen with built-in authentication so customers can save their account information and personalize their Bar IQ experience.
* The Bar IQ Navigation Bar is up-to-date with ROI, Layout Builder, and FAQ pages. 

#### Bug Fixes
N/A

## Additional Features
* https://drive.google.com/file/d/17HeeNRy0Ro8cN5rEbBq5SzvbMyhxYAQy/view?usp=sharing
