package com.jejuair.memorial;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemorialRepository extends JpaRepository<Memorial, Long> {

}
