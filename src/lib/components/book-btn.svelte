<script>
	import { CloseOutline, MinusOutline, UploadSolid } from 'flowbite-svelte-icons';

	let isOpen = false;
	let files = [];

	function handleFileChange(event) {
		files = Array.from(event.target.files);
	}
</script>

<button on:click={() => (isOpen = true)} class="relative h-fit border-2 bg-fuchsia-300 p-3">
	<p class="sparkle">Book Now</p>
</button>

<dialog
	open={isOpen}
	class="border-groove win fixed top-10 z-15 m-auto max-h-full w-3/4 max-w-5xl bg-[#c0c0c0] shadow-xl shadow-black max-md:w-[90dvw]"
>
	<div>
		<div class="flex justify-between border-3 border-[#c0c0c0] bg-blue-700 p-2">
			<p class="text-white">Girlpop OS</p>
			<div class="flex items-end justify-end gap-1">
				<button on:click={() => (isOpen = false)} class="flex items-end justify-end gap-1">
					<div class="win bg-gray-200">
						<MinusOutline size="sm" />
					</div>
					<div class="win bg-gray-200">
						<CloseOutline size="sm" />
					</div>
				</button>
			</div>
		</div>
		<form
			class="flex max-h-[80dvh] flex-col overflow-x-clip overflow-y-auto p-3"
			method="POST"
			action="?/thank-you-for-booking"
		>
			<div class="my-2 flex flex-wrap gap-2">
				<h3 class="w-full font-bold">About you:</h3>
				<div class="grid h-fit grid-rows-[50px_fit]">
					<label for="fname">First name:</label>
					<input type="text" id="fname" name="fname" />
				</div>
				<div class="grid h-fit grid-rows-[50px_fit]">
					<label for="lname">Last name:</label>
					<input type="text" id="lname" name="lname" />
				</div>
				<div class="grid h-fit grid-rows-[50px_fit]">
					<label for="pronouns">Pronouns:</label>
					<input type="text" id="pronouns" name="pronouns" />
				</div>
				<div class="grid h-fit grid-rows-[50px_fit]">
					<label for="age">Age:</label>
					<input type="number" id="age" name="age" />
				</div>
				<div class="grid h-fit grid-rows-[50px_fit]">
					<label for="phone">Phone Number:</label>
					<input type="tel" id="phone" name="phone" />
				</div>
				<div class="grid h-fit grid-rows-[50px_fit]">
					<label for="email">Email:</label>
					<input type="email" id="email" name="email" />
				</div>
			</div>
			<div class="flex flex-wrap gap-3">
				<h3 class="w-full font-bold">About the Tattoo:</h3>

				<div class="grid h-fit w-full grid-rows-[50px_fit]">
					<label for="tattoo-location">
						Where do you want your tattoo placed? Please include if we are working around other
						tattoos!
					</label>
					<textarea id="tattooLocation" name="tattooLocation"></textarea>
				</div>
				<div class="grid h-fit w-full grid-rows-[50px_fit]">
					<label for="tattoSize">What size do you want your tattoo?:</label>
					<textarea id="tattoSize" name="tattoSize"></textarea>
				</div>
				<div class="flex items-center gap-3">
					<label for="color">Color</label>
					<input type="checkbox" id="color" name="color" />
					<label for="color">Black & Grey</label>
					<input type="checkbox" id="black" name="black" />
				</div>
				<div class="flex w-full flex-col">
					<h4 class="w-full text-lg">
						What is your availability? Include dates/times that work best for you:
					</h4>
					<textarea name="dates" id=""></textarea>
				</div>
				<div class="flex w-full flex-col">
					<h4 class="w-full text-lg">
						If you have a budget we want to work within or any other info I should know please let
						me know here:
					</h4>
					<textarea name="budget" id=""></textarea>
				</div>
				<div class="grid h-fit w-full grid-rows-[50px_fit]">
					<label for="lname">
						Please type out a description of what you are wanting to get tattooed! Please include
						any specifics for your design:
					</label>
					<textarea rows="4" name="description"></textarea>
				</div>
				<div class="grid h-fit grid-rows-[50px_fit]">
					<label for="deposit-method">How would you like to handle deposit?</label>
					<select id="depositMethod" name="depositMethod" class="w-fit">
						<option value="" selected>Select a payment method</option>
						<option value="venmo">Venmo</option>
						<option value="zelle">Zelle</option>
						<option value="apple-pay">Apple Pay</option>
						<option value="cash">Cash</option>
					</select>
				</div>
				<div
					class="relative mx-auto flex h-fit w-fit items-center justify-center border bg-gray-300 px-3 py-2 text-black"
				>
					<input
						on:change={handleFileChange}
						multiple
						type="file"
						accept="jpeg,jpg,png,image/*"
						name="references"
						class="absolute h-full bg-blue-300 opacity-0"
					/>
					{#if files.length}
						<span
							class="absolute -top-2 -right-2 inline-flex items-center justify-center rounded-full bg-red-600 px-2 py-0.5 text-xs leading-none font-bold text-white"
						>
							{files.length}
						</span>
					{/if}
					<UploadSolid />
					<p>Upload refernce photos</p>
				</div>
			</div>
			<div class="flex flex-col gap-2 p-2">
				<p class="text-xs">
					Minimum is $100 and hourly is $150 All appointments will require a NON REFUNDABLE $100
					DEPOSIT to secure our date.  It will go towards your final cost at the completion of your
					appointment or final session.   Be prepared to put the deposit down within 24 hours of
					setting the date. Again: A no call no show is an automatic forfeit of the deposit.  Please
					make sure all information(especially your EMAIL)is 100% correct so I am able to reach you.
					Also add claretattoos@gmail.com to make sure you receive my reply. OF YOU HAVENT HEARD
					FROM ME REMEMBER TO CHECK YOUR SPAM FOLDER  You will see your design at the time of our
					appointment. (Don’t worry! I will schedule in an little extra time in case we need to make
					any changes or adjustments)  The shops address is 4757 University Ave. San Diego,
					CA  92105 United States and there is parking available behind the building. LOVE U, see
					you then!
				</p>
				<button class="win self-end bg-[#c0c0c0] px-4 py-1">Submit</button>
			</div>
		</form>
	</div>
</dialog>

<style>
	.win {
		border: 2px outset #c0c0c0;
	}
</style>
