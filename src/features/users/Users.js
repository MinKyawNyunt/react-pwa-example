import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  selectUsers,
  selectLoading,
  selectError,
} from "./usersSlice";
import _ from "lodash";
import { Card, Image } from "rebass";
// import styles from "./Users.module.css";
import { Link } from "react-router-dom";

export function Users() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  let show = "";
  if (loading) {
    show = "Loading";
  } else if (error) {
    show = error;
  } else if (!_.isEmpty(users)) {
    show = users.map((user) => {
      return (
        <Link to={"/user/" + user.id} key={user.id}>
          <Card width={256}>
            <Image src={user.avatar} /> <br />
            {user.first_name} {user.last_name}
          </Card>
        </Link>
      );
    });
  }

  return <div>{show}</div>;
}
