package com.jejuair.memorial.controller;

import com.jejuair.memorial.dto.MemorialCountDto;
import com.jejuair.memorial.dto.MemorialListDetails;
import com.jejuair.memorial.service.MemorialService;
import com.jejuair.memorial.dto.MemorialDto;
import com.jejuair.memorial.dto.MemorialResponseDto;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemorialController {


    private final MemorialService memorialService;

    @PostMapping("/memorials")
    public ResponseEntity<MemorialResponseDto> createMemorial(@Valid @RequestBody MemorialDto memorialDto) {

        MemorialResponseDto response = memorialService.createMemorial(memorialDto);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/memorials")
    public ResponseEntity<MemorialListDetails> getMemorials(@RequestParam(required = false) Long cursor) {
        MemorialListDetails details = memorialService.getMemorials(cursor);
        return ResponseEntity.ok(details);
    }

    @GetMapping("/memorials/count")
    public ResponseEntity<MemorialCountDto> getCount() {
        MemorialCountDto response = memorialService.getCount();
        return ResponseEntity.ok(response);
    }
}
