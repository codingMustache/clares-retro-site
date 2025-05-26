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
						<MinusOutline />
					</div>
					<div class="win bg-gray-200">
						<CloseOutline />
					</div>
				</button>
			</div>
		</div>
		<form
			class="flex max-h-[80dvh] flex-col overflow-x-clip overflow-y-auto p-3"
			method="POST"
			action="?/book"
		>
			<div class="my-2 flex flex-wrap gap-2">
				<h3 class="w-full">About you:</h3>
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
				<h3 class="w-full">About the Tattoo:</h3>
				<div class="grid grid-cols-2">
					<div class="grid h-fit grid-rows-[50px_fit]">
						<label for="tattoo-location">Tattoo Placement:</label>
						<select id="tattoo-location" name="tattooLocation" class="w-fit">
							<option value="">-- Select a body part --</option>
							<option value="arm_upper">Upper Arm</option>
							<option value="arm_lower">Lower Arm / Forearm</option>
							<option value="shoulder">Shoulder</option>
							<option value="chest">Chest</option>
							<option value="back_upper">Upper Back</option>
							<option value="back_lower">Lower Back</option>
							<option value="stomach">Stomach</option>
							<option value="ribs">Ribs / Side</option>
							<option value="thigh">Thigh</option>
							<option value="calf">Calf</option>
							<option value="ankle">Ankle</option>
							<option value="foot">Foot</option>
							<option value="hand">Hand</option>
							<option value="wrist">Wrist</option>
							<option value="neck">Neck</option>
							<option value="nape">Nape of Neck</option>
							<option value="face">Face</option>
							<option value="head">Head / Scalp</option>
							<option value="ear">Ear</option>
							<option value="buttocks">Buttocks</option>
						</select>
					</div>
					<div class="grid h-fit grid-rows-[50px_fit]">
						<label for="tattoo-size">Tattoo Size:</label>
						<select id="tattoo-size" name="tattooSize" class="w-fit">
							<option value="">-- Select a size --</option>
							<option value="extra_small">Extra Small (e.g. under 1")</option>
							<option value="small">Small (1"–3")</option>
							<option value="medium">Medium (3"–6")</option>
							<option value="large">Large (6"–10")</option>
							<option value="extra_large">Extra Large (10"+)</option>
							<option value="half_sleeve">Half Sleeve</option>
							<option value="full_sleeve">Full Sleeve</option>
							<option value="back_piece">Back Piece</option>
							<option value="full_back">Full Back</option>
							<option value="full_leg">Full Leg</option>
							<option value="full_body">Full Body</option>
							<option value="custom">Custom / Other</option>
						</select>
					</div>
				</div>
				<div>
					<input type="checkbox" id="color" name="color" />
					<label for="color">Color</label>
				</div>
				<div class="my-3 flex flex-col">
					<h4 class="w-full text-lg font-bold">Available Dates:</h4>
					<div class="flex w-full gap-4">
						<div class="grid h-fit w-30 grid-rows-[50px_fit]">
							<label for="start-date">Start Date:</label>
							<input type="date" id="start-date" name="startDate" />
						</div>
						<div class="grid h-fit w-30 grid-rows-[50px_fit]">
							<label for="end-date">End Date:</label>
							<input type="date" id="end-date" name="endDate" />
						</div>
					</div>
				</div>
				<div class="grid h-fit w-full grid-rows-[50px_fit]">
					<label for="lname">Description:</label>
					<textarea rows="4" name="description" placeholder="Description of the tattoo"></textarea>
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
