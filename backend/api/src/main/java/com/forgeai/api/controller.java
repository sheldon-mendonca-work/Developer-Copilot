package com.forgeai.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class controller {
  @GetMapping ("/hello")
  public ResponseEntity<String> getHello(){
    return ResponseEntity.ok("Connected to backend");
  }
}
