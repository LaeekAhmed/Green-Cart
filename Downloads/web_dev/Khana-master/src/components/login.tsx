import React from 'react';
import { GoogleLoginButton } from 'ts-react-google-login-component';
import { useEffect, useState } from "react";

export class Login extends React.Component {

    // const [ profile, setProfile ] = useState<any>([]);
    
    preLoginTracking(): void {
        console.log('Attemp to login with google');
    }
    onSuccess(res : any): void {
        console.log(res.profileObj);
    }


    errorHandler(error: string): void{
        // handle error if login got failed...
        console.error(error)
    }

    responseGoogle(googleUser: gapi.auth2.GoogleUser): void {
        const id_token = googleUser.getAuthResponse(true).id_token
        const googleId = googleUser.getId()

        console.log({ googleId })
        console.log({accessToken: id_token})
        // Make user login in your system
        // login success tracking...
    }

    render(): JSX.Element {
        const clientConfig = { client_id: "444670563347-kckbs0ettod3bvvvdik5su2mbhdt7prn.apps.googleusercontent.com" }

        return (
            <div>
                    <GoogleLoginButton
                        responseHandler={this.responseGoogle}
                        clientConfig={clientConfig}
                        preLogin={this.preLoginTracking}
                        failureHandler={this.errorHandler}
                    />
            </div>
        )
    }

}