import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Card, Heading } from "rebass";
// import styles from "./Users.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Flex, Box, Text, Image } from "rebass";
import "./user.css";

function refreshPage() {
  window.location.reload(false);
}

export default function User() {
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);
  let { id } = useParams();
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setUser(result);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          if (!error.response) {
            setIsOnline(false);
          } else {
            setIsLoaded(true);
            setError(error);
          }
        }
      );
  }, []);
  if (!isOnline) {
    return (
      <div>
        No Netwok Connection <br />
        <button onClick={refreshPage}>Click to Reload</button>
      </div>
    );
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {/* <Flex> */}
        <Image src={user.data.avatar} className="image-center" />
        {/* </Flex> */}

        <Flex>
          <Box width={1 / 2} px={2} className="text-align-right">
            <Text fontWeight="bold" p={1}>
              First Name
            </Text>
          </Box>
          <Box width={1 / 2} px={2} className="text-align-left">
            <Text p={1}>{user.data.first_name}</Text>
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} px={2} className="text-align-right">
            <Text fontWeight="bold" p={1}>
              Last Name
            </Text>
          </Box>
          <Box width={1 / 2} px={2} className="text-align-left">
            <Text p={1}>{user.data.last_name}</Text>
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} px={2} className="text-align-right">
            <Text fontWeight="bold" p={1}>
              Email
            </Text>
          </Box>
          <Box width={1 / 2} px={2} className="text-align-left">
            <Text p={1}>{user.data.email}</Text>
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} px={2} className="text-align-right">
            <Text fontWeight="bold" p={1}>
              Company
            </Text>
          </Box>
          <Box width={1 / 2} px={2} className="text-align-left">
            <Text p={1}>{user.ad.company}</Text>
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} px={2} className="text-align-right">
            <Text fontWeight="bold" p={1}>
              Url
            </Text>
          </Box>
          <Box width={1 / 2} px={2} className="text-align-left">
            <Text p={1}>{user.ad.url}</Text>
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} px={2} className="text-align-right">
            <Text fontWeight="bold" p={1}>
              Text
            </Text>
          </Box>
          <Box width={1 / 2} px={2} className="text-align-left">
            <Text p={1}>{user.ad.text}</Text>
          </Box>
        </Flex>

        <Link to="/">Back</Link>
      </div>
    );
  }
}
