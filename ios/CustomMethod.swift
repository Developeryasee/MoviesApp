//
//  CustomMethod.swift
//  MoviesApp
//
//  Created by yasar on 17/03/23.
//

import Foundation

@objc(CustomMethod)

class CustomMethod: NSObject{
  @objc
  func getMessage(_ name:String,resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    if name=="" {
      resolve("Please, Enter your name")
    }else{
      resolve("Hi "+name+", How are you?")
    }
  }
  @objc
  static func requiresMainQueueSetup() -> Bool {
      return true
    }
}
