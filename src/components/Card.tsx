import { FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

type CardProps = {
	id: number;
	name: string;
	job: string;
	image: string;
	text: string;

	surpriseMe: () => void;
	nextReview: () => void;
	prevReview: () => void;
};

const Card = ({
	id,
	name,
	job,
	image,
	text,
	surpriseMe,
	nextReview,
	prevReview,
}: CardProps) => {
	return (
		<article className='max-w-[700px] flex flex-col items-center bg-white p-8 shadow-sm rounded-md'>
			<header className='relative mb-4 before:h-full before:w-full before:bg-custom-purple before:absolute before:-right-2 before:-top-1 before:rounded-[50%]'>
				<div
					className='relative w-[150px] h-[150px] rounded-[50%]'
					style={{
						backgroundImage: `url("${image}")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
				<span className='absolute w-10 h-10 top-4 bg-custom-purple rounded-[50%] flex items-center justify-center'>
					<FaQuoteRight className='text-white' size={20} />
				</span>
			</header>
			<div className='flex flex-col items-center mb-4'>
				<h1 className='text-3xl'>{name}</h1>
				<h2 className='text-2xl text-custom-purple mb-4'>{job}</h2>
				<p>{text}</p>
			</div>
			<footer>
				<div className='flex justify-center mb-4'>
					<FaAngleLeft
						className='text-custom-purple'
						size={30}
						onClick={prevReview}
					/>
					<FaAngleRight
						className='text-custom-purple'
						size={30}
						onClick={nextReview}
					/>
				</div>
				<button
					className='bg-purple-300 py-[6px] px-[12px] text-custom-purple rounded-md'
					onClick={surpriseMe}
				>
					Surprise Me
				</button>
			</footer>
		</article>
	);
};

export default Card;
