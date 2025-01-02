package com.jejuair.memorial.service;

import com.jejuair.memorial.dto.MemorialCountDto;
import com.jejuair.memorial.dto.MemorialListDetails;
import com.jejuair.memorial.repository.MemorialRepository;
import com.jejuair.memorial.domain.Memorial;
import com.jejuair.memorial.dto.MemorialDto;
import com.jejuair.memorial.dto.MemorialResponseDto;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemorialService {

    private static final int PAGE_SIZE = 10;
    private final MemorialRepository memorialRepository;

    @Transactional
    public MemorialResponseDto createMemorial(MemorialDto memorialDto) {
        Memorial memorial = new Memorial(memorialDto.getAuthor(), memorialDto.getContent());
        Memorial savedMemorial = memorialRepository.save(memorial);

        return new MemorialResponseDto(savedMemorial.getId(), savedMemorial.getAuthor(),
            savedMemorial.getContent(), savedMemorial.getCreatedAt());
    }

    @Transactional(readOnly = true)
    public MemorialListDetails getMemorials(Long cursor) {
        if (cursor != null && cursor == -1L) {
            return new MemorialListDetails(new ArrayList<>(), -1L);
        }

        List<Memorial> memorials = memorialRepository.findByIdLessThanOrderByIdDesc(
            cursor == null ? Long.MAX_VALUE : cursor,
            PageRequest.of(0, PAGE_SIZE)
        );

        Long nextCursorId = memorials.isEmpty() ? -1L :
            memorials.get(memorials.size() - 1).getId();

        List<MemorialResponseDto> dtos = memorials.stream()
            .map(m -> new MemorialResponseDto(m.getId(), m.getAuthor(), m.getContent(), m.getCreatedAt()))
            .collect(Collectors.toList());

        return new MemorialListDetails(dtos, nextCursorId);
    }

    @Transactional(readOnly = true)
    public MemorialCountDto getCount() {

        return new MemorialCountDto(memorialRepository.count());
    }
}
