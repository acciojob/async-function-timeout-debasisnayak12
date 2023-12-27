//your JS code here. If required.
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener('click', async () => {
	try{
	   const text = document.getElementById("text").value;
	   const delay = document.getElementById("delay").value;
		const message = await displayWithDelay(text, delay);
		output.textContent = message;
	}catch(error){
		console.log("Error: ", error);
		output.textContent = "Invalid delay or other error Ocured!";
	}
});

async function displayWithDelay(message, delay){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(message);
		},delay);
	});
}
