package com.jejuair.memorial.dto;

import java.util.List;

public record MemorialListDetails(List<MemorialResponseDto> memorials, Long nextCursorId) {}

