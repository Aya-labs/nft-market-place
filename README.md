# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
Artists are often limited by the decisions of art dealers, and galleries. Due to the constraints of finite space and time, as well as the desire for profit, dealers and galleries limit artist exposure, reach and profits.
Making it harder for artists to create and display their work through the above constraints means less art for the world. In an age approaching post-scarcity the human race needs more and more ways to ponder about themselves and their surroundings. More ways to find meaning, more ways to express themselves.
I and my team created the 2-way marketplace web application "GALARIE", a tool to help, by removing the middle man (art galleries or exclusive dealers) and connecting artists and art collectors directly to other collectors and admirers of art.

The Functionality and Features of this application include:
1: Database to track entities such as Users, Listings, etc.
Create user accounts with authorization and authentication (using Devise package).
2: Any User account can both buy and sell art.
3: User can post a Listing to app for potential buyers to view or purchase.
4: User can browse art and use a search bar the look for specific artists.
5: User can purchase listed art.
6: Payment Processing (using Cryptocurrency wallets ).

Future Developments
1: Some functionality and features for the future I would have liked to include but didn't have enough time for are:
2: Starred Listings, to bookmark them on a User's account.
3: Sort by "Trending", i.e. listings with lot's of views and stars at the top.
4: Search bar that searches for Listings with a certain Style, searching related models is an "advanced mode" feature of the Ransack gem that I didn't have time to implement.
5: Direct Message communication between Buyers and Sellers.
6: Better and more comprehensive Functional Tests.
7: Change Purchases entities to be a duplicate of a Listing entity, rather than a join table to link Users that purchased to Listing they purchased. This is to allow a Users purchase history to not be have missing entires when the Seller of a Listing they purchased has their account deleted which deletes the related Listings. Originally I did this as join table as I thought I shouldn't create more data than I need to, not considering this limitation that would result from it.
8: Notifications, both in app and via email.
9: Responsiveness and design for mobile use.
10: Admin User role, has authority to take CRUD actions on Object's not owned by them. Also has access to Admin Dashboard.
11: Admin Dashboard. Can view all users here and manage their account details.
