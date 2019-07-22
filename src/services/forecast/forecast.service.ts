import axios from 'axios';

const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;
const darkSkyUrl = 'https://api.darksky.net/forecast';

export default class ForecastService {
    public async getForecastByCoordinates(lat: number, long: number) {
        try {
            const response = await axios.get(`${darkSkyUrl}/${DARK_SKY_API_KEY}/${lat},${long}`);
            return response.data;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}
