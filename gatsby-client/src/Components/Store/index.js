import React, { useState, useEffect } from "react";
import axios from "axios";
import { Magic } from "magic-sdk";
import Layout from "../Layout";

export const Store = ({ children }) => {

  return (
    <Layout>
      { children }
    </Layout>
  )
}

export default Store;