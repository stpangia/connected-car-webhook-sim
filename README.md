# Connected Car Webhook Simulator

## Spoof vehicle event webhooks for testing your connected car apps

### Requirements

- Node.js ([https://nodejs.org/](https://nodejs.org/)) 
	
	This app was built and tested against Node.js v6.2.2

- Dash API Key ([https://dash.by/developers.html/](https://dash.by/developers.html/))

- Automatic API Key ([https://developer.automatic.com/](https://developer.automatic.com/))

- Google Maps API Key ([https://cloud.google.com/maps-platform/](https://cloud.google.com/maps-platform/))

### Installation 

- Clone Git repo

- Run (from command line, in root of locally cloned repo)

    `cp .env.example .env`

- Edit .env file
    - In a text editor, modify the .env file created above to suit your environment, API credentials, etc (NOTE that the default PORT value is 3001 in anticipation that the application being demoed or tested will be running on the default Port:3000)

- Run (from command line, in root of locally cloned repo)

    `npm install`

### Launching the Application 

- Run (from command line, in root of locally cloned repo)

    `npm start`

### Troubleshooting

##### Error: Port in use
Open up .env file in a text editor and change PORT=3001 to PORT=3002 (or 3003, etc)

##### Error: Some other issue
Open an issue in Github


