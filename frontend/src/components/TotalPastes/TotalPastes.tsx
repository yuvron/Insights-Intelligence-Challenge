import "./TotalPastes.scss";
import Loader from "../Loader/Loader";

interface TotalPastesProps {
	totalPastes: number | undefined;
}

const TotalPastes: React.FC<TotalPastesProps> = ({ totalPastes }) => {
	return (
		<div className="total-pastes">
			{totalPastes ? (
				<>
					<p>
						A total of
						<span className="count"> {totalPastes}</span>
					</p>
					<p>pastes were scraped from the dark web</p>
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default TotalPastes;
