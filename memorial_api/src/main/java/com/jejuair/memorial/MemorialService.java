package com.jejuair.memorial;

import com.jejuair.memorial.dto.MemorialDto;
import com.jejuair.memorial.dto.MemorialResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemorialService {

    private final MemorialRepository memorialRepository;

    @Transactional
    public MemorialResponseDto createMemorial(MemorialDto memorialDto) {
        Memorial memorial = new Memorial(memorialDto.getAuthor(), memorialDto.getContent());
        Memorial savedMemorial = memorialRepository.save(memorial);

        return new MemorialResponseDto(savedMemorial.getId(), savedMemorial.getAuthor(),
            savedMemorial.getContent(), savedMemorial.getCreatedAt());
    }

}
