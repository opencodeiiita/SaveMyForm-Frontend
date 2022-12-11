import axios from "axios";
import { getLS, error, log } from "../";

const API_URL = "";

const getAccessToken = () => {
    return getLS("jwt_token");
};

const getHeaders = (token) => {
    if (!token) token = getAccessToken();
    if (token)
        return {
            headers: {
                Accept: "application/json",
                "x-access-token": token,
            },
        };
    return {
        headers: {
            Accept: "application/json",
        },
    };
};

const post = async (endpoint, body, token = null) => {
    try {
        const response = await axios.post(
            API_URL + endpoint,
            body,
            getHeaders(token)
        );
        log(response.data);
        return response.data;
    } catch (err) {
        error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

const get = async (endpoint, token = null) => {
    try {
        const response = await axios.get(API_URL + endpoint, getHeaders(token));
        log(response.data);
        return response.data;
    } catch (err) {
        error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

const put = async (endpoint, body, token = null) => {
    try {
        const response = await axios.put(
            API_URL + endpoint,
            body,
            getHeaders(token)
        );
        log(response.data);
        return response.data;
    } catch (err) {
        error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

const remove = async (endpoint, token = null) => {
    try {
        const response = await axios.delete(
            API_URL + endpoint,
            getHeaders(token)
        );
        log(response.data);
        return response.data;
    } catch (err) {
        error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

export { getAccessToken, post, get, put, remove };
