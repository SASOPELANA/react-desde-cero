import UserIcon from "../../assets/agregar-usuario.png";

const users = [
	{
		id: 1,
		name: "Juan Perez",
		description: "Frontend Developer",
		imagen: UserIcon,
	},
	{
		id: 2,
		name: "Maria Gomez",
		description: "Backend Developer",
		imagen: UserIcon,
	},
	{
		id: 3,
		name: "Pedro Rodriguez",
		description: "Fullstack Developer",
		imagen: UserIcon,
	},
];

export const Section = () => {
	return (
		<section className="p-8 flex flex-wrap gap-5 justify-center">
			{users.map((user) => {
				return (
					<div
						className="bg-amber-200  items-center m-auto pt-6 px-2 rounded-md"
						key={user.id}
					>
						<img
							className="size-28 mx-auto "
							src={user.imagen}
							alt={user.name}
						/>
						<h2 className="flex justify-center items-center p-2 font-bold text-xl">
							{user.name}
						</h2>
						<p className=" flex justify-center items-center p-2">
							{user.description}
						</p>
					</div>
				);
			})}
		</section>
	);
};
