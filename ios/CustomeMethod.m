//
//  CustomeMethod.m
//  MoviesApp
//
//  Created by yasar on 17/03/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(CustomMethod, NSObject)

RCT_EXTERN_METHOD(getMessage:(NSString *)name resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
