# Watch2Gether  
    
Stream video together in group sessions and have controlled access to every video being streamed in a room.  
   
So, if anyone stops / seeks the video, it'll be reflected in all the streams being played simultaneously.  
  
It is perfect for watching shows together with everyone.  
  
  
## how to install  
```git clone the repo.```  
```cd server```     
```npm i```  
```npm run test```   
```npm run test2```  
  
  
The Basic Server runs at ```port 8080``` on your localhost.  
The Socket.io Service runs at ```port 5000``` on your localhost.  
You can change the default ports by changing the port in these files i.e., server.js and SocketProvider.js respectively and the same in the config.yml file.  
  
## Starting the ngrok Server  
there is a ngrok.yml file for the ngrok config  
to start the ngrok using with config in the config.yml use the following command:  
   
```ngrok start -cofig=/path/to/the/ngrok.yml/file/ngrok.yml --all```  
  
ex:  
```ngrok start -config=/home/prashant/projects/watch2gether/server/ngrok.yml --all```  
  
  
Make sure before running the file. You've stored your auth token for ngrok in the config.yml.  
You can get your own ngrok auth token from the official ngrok website: [ngrok-website](https://ngrok.com/)

## Future Additions  
  
Following are the future add-ons:  
* Live Chat  
* Live Update - who joined, who stopped the video or changed  
* Only Host Controls Settings  
* Ability to Create multiple rooms with different IDs  
