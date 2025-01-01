package com.jejuair.memorial.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemorialResponseDto {

    private Long id;

    private String author;

    private String content;

    private LocalDateTime createdAt;
}
