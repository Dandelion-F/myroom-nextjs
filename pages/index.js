import HouseDetails from "../components/HouseDetails";
import axios from "axios";

export default function HousePage({data}) {
    return <HouseDetails data={data}></HouseDetails>
}

export async function getServerSideProps(ctx) {
    // const res = await axios.get('https://myroom-client.vercel.app/api/house?id=103612')
    const res = await axios.get('https://api.saicem.top/house/103612')
    return {
        props: {
            data: res.data
        }
    }
}