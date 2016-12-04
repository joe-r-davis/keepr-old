##Keepr

Keepr is a social network that allows users to visually share, and discover new interests by posting (known as 'keeping' on Keepr) images or videos to their own or others' collections (i.e. a collection of 'vaults,' usually with a common theme) and browsing what other users have kept. 

###The Setup

Keepr has some basic structure and layout but its missing some key components. The idea here is to allow users to post items if they are logged in (Auth is already handled for you). They can also browse all of the items (aka keeps) that have been posted. If any user wants to store a reference to any paticular keep they will store it in the `vault` of their choice. This is the tricky part `vaults` don't currently exist. 

The functionality of adding a post and logging in are already done however during out alpha test users requested a way to save posts into paticular lists. We want to give the users the opportunity to click on the keep icon for any post and have a list of their vaults appear. Selecting the vault should create a reference to that post and the users vault. 

Vaults themselves are relatively simple... They only require a name and a description and will then have a list of posts that are saved within the vault. 

For example I may really like game art and thus I would be a user who creates a vault named ***Sweet Game Art*** I will then start saving the `keeps` I like into this vault.


```javascript
var member = {
	name: 'Jake Overall'
	vaults: [{
		name: 'Sweet Game Art',
		description: 'A place to keep my inspirational game art and tutorial links',
		keeps: [
			keepId1,
			keepId2
		]
	}]
}

//Remember that vaults will be its own resource so 
```

###Step 1 -  Where is the output? `Total Points: 5`

The keeps that you currently can see are actually coming from a firebase reference. Be sure to look at the structure of these objects. There is one small problem right now and that is all keeps are currently public and many users have requested an option to make keeps private. We have been told that this should be realatively simple task and can be accomplished with a simple filter...

The next big problem to tackle is the vault creation. Our design team went ahead and added a simple form and button for creating vaults under the members page however we don't know how to tie this form into the database and user. 

There is a `models.js` file that is set up to use js-data. You might want to start there.

> Remember that a single use can have many vaults but each vault will only belong to a single user. ***Firebase security is in place each vault must have a userId property set to the current member***
Also a vault has many keeps and keeps could have many vaults but only one author or user... 

Requirements:
- `2.5 points`: Users can mark keeps as public
- `2.5 points`: Users can create vaults to store their keeps   

###Step 2 - Adding the functionality `Total Points: 10`

Adding keeps to the public keep should be easy enough. The tricky part will be to only show the keeps that have been marked as public. This might take some tweaking. Also When you get the `keeps-component` working with firebase users should be able to click the `keep button` on any of the items and should be prompted to select which of their `vaults` they would like to store the item. When Storing the item you should only need to store the item's `id`.   

Requirements: 
- `2.5 points`: Users can add/remove keeps to their individual vaults
- `2.5 points`: Anytime a `keep` is viewed or `kept in a vault` that items count should go up.  
- `5 points`: Users can manage their keeps and vaults in the dashboard
 
###Step 3 - Prettify `Total Points: 5`

What this site is already pretty. :) Make sure the features you add are attactive.  

Requirements:
- `5 points`: When hovering over the keep show the three buttons from the bottm overlaid on the image

###BONUS - Sharing the fun `Total Points: 5`
Requirements: 
- When a user click the share icon they should be able to post that share to the various social medias (Facebook, Twitter, ect) 

###Finished?
When You are finished please slack the url for your github repo to me with in a DM.
