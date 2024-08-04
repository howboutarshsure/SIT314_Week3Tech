const mqtt = require('mqtt');

// Connect to the HiveMQTT broker
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

// Define topic and message
var topic = "/myid";
var message = "My message";

// Listen for the connection event and publish the message
client.on('connect', () => {
    console.log('mqtt connected');
    client.publish(topic, message);
    console.log('Published to Topic: ' + topic + " with Message: " + message);
});
