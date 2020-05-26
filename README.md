# Buzzr
An app that streamlines and enhances the restaurant table waitlist system

## Getting Started

These instructions will show you how to download a live version of our application for testing/viewing purposes

### Installing

A step by step guide to getting our application onto your iOS/Android device for testing

Step 1: Download expo

We've created our app using expo (open source for react native app creation).
To view our project, please download the expo app on the app/play store.

<img width="550" height="400" src="https://i.gyazo.com/f396b1c447d85df72138ab54eb5bce23.png">


Step 2: Navigate to Profile Screen

Select the profile button in the bottom right after entering the app.

<img width="270" height="480" src="https://i.gyazo.com/5bfc1cc7edc896b65e76c72ec53591cd.png">


Step 3: Login

Login to the Buzzr expo account to view and test our app:

```
Username: buzzr
Password: ask Buzzr team for password
```
<img width="270" height="480" src="https://i.gyazo.com/cd07c4072367bc0e0e12038971649c1b.png">


Step 4: Launching Project

Select the project "buzzr" under published projects to launch the Buzzr app.  The app will open as a seperate application.  The inital screen starts with a selection between customer/worker mode.  If you'd later like to change the mode, simply close the app and launch the project again in expo.

<img width="270" height="480" src="https://i.gyazo.com/304c01c3a08def9ec1b55d40c0f0b6de.png">

## App User Guide

When first loading the app, you are taken to this screen.  Here you can select between customer and worker mode.  The app is intended to work so it could be used on an iPad at the entrance of a restaurant on customer mode.  Once customer mode is chosen, the app stays on customer mode until the app is restarted.  This is so customers couldn't access the worker mode.

<img width="270" height="480" src="https://lh3.googleusercontent.com/hOudw7iLCybDciPdRX2JWGck_oSvY10iOeFKCtgtOQYbOEq3Oiqx6n-eF8L9lzc0HT4ZjYR2WBGOo6i2UcEsuQNVP2W73O1Rul5I10tcE_cYblkBPSnFbZAQ1y1oqGydsZGNBoPj3aA1naJdUkHmMe0LmefhBs5yZh-gwH0RpdrCK7mTb6F3kqtM57v-IHizHUncgilQmiTlFuOSWumsnfTXnLIP7okRrYRzfTsRb8K3iM17ViXlGDPt_yBbUGLmNgdUxoKxl5J-VaZkjCTwrz_LuBMUSv0a49NqA6RYSfqE_T6OAHvmePWstQ0Esh0M6tJxxzH_QW4gg6629SDBkHYp6MxJA5gQ-ZOgbRQWY3a8MU-VZQNQhbb3MCNqD1DUpAPr5hrfKOfoq401JSdY379D3nbH2rFAt_Q5tFDFlpKGS086stcsHJ7ljcsc4AsA7LMgbE06sIUF7otWl1ydxjxXXmD7-LuH93mnq3NGeV-hAAAIaeFIOGkv2Blzv_i9CZembVlHYcqLEEdkDOaUr6aj0nv79VpAw7OwpUuq9_Wbbgjph-3cQvsZbsyWzcEHF9ohXkdF9ADJ4Ja39HjqS2QljnBKbXQ391qWFPKLHJ8jRUFox4JuJQHpqOcpNG_JpUEyaApoyEeVnMxXaMlB2zLtfZLRPtxN1yeAOMU9pjjtM4EHSOs0ssRWe9WD=w417-h741-no?authuser=0">

After selecting customer mode, the customer is able to type in their information to reserve a spot in line at the restaurant.  They will recieve a text message confirming their reservation, their estimated wait time, and an option to cancel their reservation by texting back CANCEL.

<img width="270" height="480" src="https://lh3.googleusercontent.com/DMmCNopqQIMxtbSyxiSXq6iAdRbkFa9tUPwgrCpEwrAdWG3MxoSpzDqSxPtRhHAipvnqswcxChk-HTjhuveKGJGMN-kwlEt4ZKY9QTGAbyMUTghEolSN2u4zaj3WFhL1SLM0MkWvCGOwMAr2v5AV9EQi8clLNrPjTxmCfOco4M8DQqJNnkVoKPEiNNrKM8RU9TBO7yVHEt8lZkGqGtSL8BV57oQaBye44ItH0IUscdsmW1jp9K9FWjbt6Ez0XzGe-fJTw6wQ6LPENuDxgmt87EgTfyvyZgY02zYoxEBTzwYE5MF7pe0qhfQm9OkT4cdoNU3NSx3IFMQ0p0X8FgdEmx6cRrW9XRz65PSR9LsvfSN-Afov4xcV6wFkNbZMRvIiRfw2tAMseQzGMInXc1fw22HAHPJ9OABp0RqZdsWVYpGBYk432Ei2zk0LFL9SlyxG-qUWYTaNoGf2Ack2vFMkC6RmUzzdODSjhp2P0u-gYmdOo_4rgqWBKMPizi0JgYE7ZVRjpA47H0uvW6CFtDFoUyE6ngyLwKR_WLc_IvDvC7DWvXw_A2g4-MVASh6nBed98-7oxhqKHKoNJCfAZx1KXGSGnriORvlOgKdQmCkf4O2ySrr9aSAVM9VhGoU_YUggkJTNF7SJ8nvuIrMkN8ySCExlz81w6Pcz3keqh_C5Pr_aklI8ztZnHatRzqaA=w417-h741-no?authuser=0">

This is the waitlist management available in the worker mode.  Here, the host can click notify to notify a customer that their table is ready.  A text message is sent to the number the customer registered with letting them know that they should come see the host to be seated.

Additionally, the host can click the plus botton in the top right to manually add a customer to the waitlist, which will take them to the same screen as the customer would see when adding themself.

<img width="270" height="480" src="https://lh3.googleusercontent.com/GQQJmNzLtaogWIiwMEMQjfIW2QeNuECVUNOIRDOTXTp_xLepNJDMeSSOHzrx75pDFDMqM_Gpc8D46Zh9ERzJaNuDOuqSmArbee85Oe7f_1eObkhqzuYFR7_Xb4wSP6idMkT6TgUCiNCFPeUMUuJ7Ps4mQPkmdkn3K-_K-1ZYee-XIe3HFdPpGsxwXU0s5a2-P6Zb_Iwd5PzrdC5BC7bW481zDre3jKeo6v8hiiEVDcshVe2OpqG6YzzzYa4gBclUVZ363u4OWuit2awbRI6u9LzR3w1-dm6W5X-4EJ92flPZjBl3N5hjgdlouw70BeDTWeXYteEv5cYpw9DkSo7dv_HBr6-E2CK0ZF3x1fbQDwOVdQsIq3nk953Y1yqpcw5Kl0g-kb1eROqf3-UKzxUAq8AYVxD_Z5VhscNMbi5vo_HmREqe6qWuls8J-b4Tl98iUyolro9teYXiwbpmdCc3k8x4yEPCm2cKgvWq3gd6wG8_xjm86wxANPwYWFwHBGNO10gJ34hOGsfwkNcvaR_xcASYEsOUmNoPDDdJfgulK7RVmtCjCeTBlx-7wyPOSRXfJIcbWaNchklfVHlUD8lOPwf28WJVHpC3gdOTIOmpvSr7u9OEQ9H-eJmbad5GFK0P6yKLBOFRfdCCNc6kPxu23r6h397KcQ7GqMtwlBCLclYR6hvOw8MEJybZlEEh=w417-h741-no?authuser=0">

From the waitlist screen, selecting the clock symbol takes the host to a screen where they can set the wait times depending on the party size.  These can easily be changed during slower or busier times, so when the text is sent to the customer confirming their reservation, they get an accurate expected wait time.

<img width="270" height="480" src="https://lh3.googleusercontent.com/-_QnyEcXRvJtaPB8HAB1uXWZO5oTfAK2ibe0CYvwjiefsH8tqaCbklMZ2gYnr33yqNMy1BblmZoOZIrjyIoJnd5KnMKIQPhm0FRGS66UnJztqpMvDA1w17_OgSLgpT4kF_Blb2V6VA5zuXZZ5qnN9NGLF_-olLTDgo_aCskAEcfjCpDCuJExNp9BdxRxsxsZBJwmXcAgQdlao3iUEfQbAiXgo83oPucYMujP7rCFCTkfD94ZJzZVbEp9xzZlTsrzw_6kL7lF0ir8VYNuNb0iCgH1DPiE2iXk0Ar8foOFLhD7mFTErm7Iae1PE9uF24LcQXFeAmcRuNqCn_CxRy0havcE0A3rj1MZ4WfZ6YhrLawVpRhD6Z3OEif_EW8s7UD76FFMK2AqrcqaDLDu8v-rg6aSa3CtRhUAXfStuU8oH7Jtja7-bI64A17-XZxpvyWvGEOtxb3_3FCeqdcyfu8koFbe5e2CdoYQ88zPWK80ZMKPOwM8PCq7LkvJQsbjoGMwZlDj2kxp6J6dRW8hex8iDuDg7CiMGCnX6KUMLge4lzfr1IdwaD07yYj7EfmJepscWTs5bCPWMjTV6LQ1AtHO18kEV_VUb6HzXwqEhxxRdXKltJMBuN72jPTxgehjJBSETxBd0vcrsw52bzAk8Dzq86_i931jNr5M_7_3ex-Srp0UFcXvsufYyVN5DI5e=w417-h741-no?authuser=0">

From the waitlist screen, the host can select the sort button in the top left to bring up the sorting menu.  This allows the host to select one of various options on how they would like to sort the waitlist.

<img width="270" height="480" src="https://lh3.googleusercontent.com/BAA5sLOI759CyRQDxxURnl4iwHcMJ1cAj0UKZwEgbgdwxdg_0RV4t7b45H5mbuObG9lkLXMF64di3KyvweiIAv9dP7inywzRPnN96tmTQWtpOCIopPwY5tcnJA-X9c4lSQ1IyBkvpLIHJTRtJLnWnVgDzj8Efl9DOhs5AtvilE-Z24Ke1OUw6fSafvQWvnDrcHI41QiCMbbmtknDd_dmtxbD3XYdEeyah522WC_9wHlORtQKa_IooSEM616LasPPR144KyOnBitCdBxBV_Hcpg4Xf6MkZB9sWuz-OZajuwck9tjyy6SziMDEsq94A_W373Aob-MVTJy_5JBt-3xWTcomby4xxIrhpKV8WwNQ-vrsTEHvq7U9KuY2Gez005eEi7v2uXsvuBoB4HdC67U7V2ZhSiFFg2QpasxeKb2wU7VOZSj3Gt18r_l2oUSnJUTVVfzGyw70wM7UCuN-aERmHOIL2CrMhlJtfAur8jkwvUeBG7YSdtTOQOzP0y5vKxTQ36O4u-3DrkXDutPbX2f7tPZuv_-M2yGAS1ZcTCrMH24JAjsb44B-02FfeUY8CXtcgdiR6g0qxpaQCyKOPAp-YYHxDjVaowRHV4tJWkxzKP9yxKCr3ihvnOEJAL1cJgG6tPm5ScV011IgPew2sl5DlS8Tmgzmo-75ucziV1f6gFm-SAyIrYHoAF5nqLJa=w417-h741-no?authuser=0">



## Built With

* [expo](https://expo.io/) - App creation workflow
* [Amazon Web Services](https://aws.amazon.com/) - Database, text messaging, interactions with app
* [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html) - Python library used to write AWS Lambda functions


## Authors

* **Blake Fuller** - *Database creation, interactions with front end* 
* **Cameron Moe** - *Text messaging through AWS Lambda* 
* **Nate Salima** - *AWS Lambda functions for database, text messaging* 
* **Trent Cowden** - *React Native development, front end/UI* 


## Acknowledgments

* Dr. Arias for weekly meetings and advice
* Josh Gunn for Buzzr branding and logo creation

