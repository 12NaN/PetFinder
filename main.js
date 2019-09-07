const express = require('express');
const app = express();

const vision = require(`@google-cloud/vision`);

const client = new vision.ImageAnnotatorClient({
    keyFilename: './cloud-vision.json'
});

client
	.labelDetection('./boomer.jpg')
	.then(res => {
        
		const labels = res[0].labelAnnotations;
		console.log('Labels');
		labels.forEach(label => console.log(label));
        
       //console.log(res);
	})
	.catch(err =>{
		console.log('Error', err);
    });
        
app.listen(5000, '127.0.0.1', () => console.log('Server running'));