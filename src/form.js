import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { data } from "./Data";

export default function Form() {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			userData: data[0],
		},
	});

	const submitHandler = (data) => {
		console.log(data);
	};
	return (
		<Container className="form-container">
			<Box
				component="form"
				onSubmit={handleSubmit(submitHandler)}
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
				className="box"
			>
				<Stack className="stack" spacing={2} direction="column">
					<TextField
						{...register("userData.fullName", {
							required: true,
							// validate: (fieldValue) => {
							// 	return fieldValue === "Thomas Sarfo" && "Sorry Name is taken";
							// },
						})}
						fullWidth={true}
						className="Textfield"
						id="outlined-basic"
						label="Full Name"
						variant="outlined"
					/>
					{/* <p>
						{errors.fullName?.type === "required" &&
							"Your Full Name is required"}
						{errors.fullName?.type === "validate" && "Sorry Name is taken"}
					</p> */}
					<TextField
						{...register(`userData.email`, { required: "Email required" })}
						className="Textfield"
						id="outlined-basic"
						label="Email Address"
						variant="outlined"
					/>
					{/* <p style={{ color: "red" }}>
						{errors.email?.type === "required" && "Your email is required"}
					</p> */}

					<TextField
						{...register(`userData.password`, { required: true })}
						className="Textfield"
						id="outlined-basic"
						label="Create Password"
						variant="outlined"
					/>
					{/* <TextField
						{...register("phone.0", {
							required: true,
							pattern: {
								value: /^-?\d*\.?\d+$/,
								message: "Sorry this is not a number",
							},
						})}
						className="Textfield"
						id="outlined-basic"
						label="Enter Phone"
						variant="outlined"
					/>
					<p>
						{errors.password?.type === "required" &&
							"Your Password is required"}
					</p> */}
					<Button
						variant="contained"
						sx={{ bgcolor: "secondary.dark" }}
						type="submit"
					>
						Sign Up
					</Button>
				</Stack>
			</Box>
			<DevTool control={control} />
		</Container>
	);
}
