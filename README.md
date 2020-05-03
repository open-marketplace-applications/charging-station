<!--lint disable no-literal-urls-->

<p align="center">
  <br>
  <a href="https://openmarketplace.org/">
     <img
      alt="open marketplace apps"
      src="./public/oma.jpg"
      width="200"
    />
  </a>
</p>


<h1 align="center"><a href="https://openmarketplace.org/"> Open Marketplace Apps</a></h1>

<p align="center">Open marketplace apps are decentralised open source apps for smart cities and local communities. </p>

<p align="center">
  <a title="MIT License" href="LICENSE">
    <img src="https://img.shields.io/github/license/gridsome/gridsome.svg?style=flat-square&label=License&colorB=6cc24a">
  </a>
  <a title="Follow on Twitter" href="https://twitter.com/marketplace_org">
    <img src="https://img.shields.io/twitter/follow/marketplace_org.svg?style=social&label=Follow%20@marketplace_org">
  </a>
  <br>
  <br>
</p>

# Chargin Station

**Demo:** [http://openmarketplace.org](https://openmarketplace.org)

The Chargin Station Backend which is designed to run on a Raspberry pi. It's a Node.js application with the [IOTA Payment Module](https://github.com/iota-pay/iota-payment-module) and runs a python script after successful payment. This scrip enables voltage on a GPIO pin of the Raspberry Pi - which controls a relais. This relais can turn on the power of the charging station.

 🛠️ 🛠️ 🛠️ UNDER DEVELOPMENT 🛠️ 🛠️ 🛠️

 Contribute to this project - join our [Discord Server](https://discord.gg/XDQQcJC).


## Setup

```bash
git clone https://github.com/open-marketplace-applications/charging-station
cd charging-station
npm install
npm start
```

Open http://localhost:5000/ in your browser.