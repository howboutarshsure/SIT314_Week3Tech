const mqtt = require('mqtt');

// Connect to the HiveMQTT broker
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

// Define the topic to subscribe to
var topic = "/myid";

// Listen for the connection event and subscribe to the topic
client.on('connect', () => {
    client.subscribe(topic);
    console.log('mqtt connected');
});

// Listen for incoming messages and log them
client.on('message', (topic, message) => {
    console.log("Topic is: " + topic);
    console.log("Message is: " + message.toString());
});
