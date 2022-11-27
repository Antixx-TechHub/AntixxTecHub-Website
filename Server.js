# DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION BEGIN
PassengerAppRoot "/home/antixxtechhub/repositories/AntixxTecHub-Website"
PassengerBaseURI "/"
PassengerNodejs "/home/antixxtechhub/nodevenv/repositories/AntixxTecHub-Website/12/bin/node"
PassengerAppType node
PassengerStartupFile Server.js
# DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION END
# DO NOT REMOVE OR MODIFY. CLOUDLINUX ENV VARS CONFIGURATION BEGIN
<IfModule Litespeed>
SetEnv HOST 127.0.0.1
SetEnv PORT 3000
</IfModule>
# DO NOT REMOVE OR MODIFY. CLOUDLINUX ENV VARS CONFIGURATION END