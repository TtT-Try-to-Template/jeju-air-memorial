package com.jejuair.memorial;

import com.jejuair.memorial.dto.MemorialDto;
import com.jejuair.memorial.dto.MemorialResponseDto;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api")
@RequiredArgsConstructor
public class MemorialController {


    private final MemorialService memorialService;

    @PostMapping("/memorials")
    public ResponseEntity<MemorialResponseDto> createMemorial(@Valid @RequestBody MemorialDto memorialDto) {

        MemorialResponseDto response = memorialService.createMemorial(memorialDto);

        return ResponseEntity.ok(response);
    }

}
