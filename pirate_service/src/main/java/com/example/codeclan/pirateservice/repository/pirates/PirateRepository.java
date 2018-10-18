package com.example.codeclan.pirateservice.repository.pirates;

import com.example.codeclan.pirateservice.models.Pirate;
import com.example.codeclan.pirateservice.projections.EmbedShip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedShip.class)
public interface PirateRepository extends JpaRepository<Pirate, Long>, PirateRepositoryCustom {
}
