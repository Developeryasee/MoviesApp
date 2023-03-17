package com.moviesapp;
import android.annotation.SuppressLint;
import android.provider.Settings;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
public class CustomMethod extends ReactContextBaseJavaModule{
    private static ReactApplicationContext reactContext;
    CustomMethod(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomMethod";
    }

    @ReactMethod
    public void getMessage(String Name,Promise response) {
        try {
            String message;
            if (Name.isEmpty()){
                message="Please, Enter your name";

            }else{
                message="Hi "+Name+", How are you?";
            }
            response.resolve(message);
        } catch (Exception e) {
            response.reject("Error", e);
        }
    }
}
