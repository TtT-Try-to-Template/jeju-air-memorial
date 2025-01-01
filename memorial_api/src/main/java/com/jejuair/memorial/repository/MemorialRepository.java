package com.jejuair.memorial.repository;

import com.jejuair.memorial.domain.Memorial;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemorialRepository extends JpaRepository<Memorial, Long> {
    List<Memorial> findByIdLessThanOrderByIdDesc(Long id, Pageable pageable);
}
