let BASE_URL;

if(process.env.NODE_ENV !== "production"){
    BASE_URL = "http://localhost:8000/";
} else {
    BASE_URL = "http://localhost:8000/";
}
export default BASE_URL;
