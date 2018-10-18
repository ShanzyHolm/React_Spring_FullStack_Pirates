package com.example.codeclan.pirateservice.repository.ships;

import com.example.codeclan.pirateservice.models.Ship;
import com.example.codeclan.pirateservice.projections.EmbedPirates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedPirates.class)
public interface ShipRepository extends JpaRepository<Ship, Long>, ShipRepositoryCustom  {


}
