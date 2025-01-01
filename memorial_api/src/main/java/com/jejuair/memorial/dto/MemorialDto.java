package com.jejuair.memorial.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemorialDto {

    @Size(max = 50)
    @NotBlank
    private String author;

    @Size(max = 1000)
    @NotBlank
    private String content;

}